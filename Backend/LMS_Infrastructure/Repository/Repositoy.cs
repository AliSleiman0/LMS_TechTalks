using LMS_BAckend.Domain.Common.Models;
using LMS_Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LMS_Infrastructure.Repository
{
	// This is a generic repository pattern implementation for Entity Framework Core 
	// It allows for CRUD operations on any entity type T that is a class. So We Do Align With the DRY Concept 
	// Allowing us to reuse the same code for different entities without duplicating code ( NO MORE RE_WRITING THE BOILER PLATE CODE OF THE REPO ).

	public class Repository<T>(DBContext context) : IRepository<T> where T : class
	{
		private readonly DBContext _context = context;

		public async Task<IReadOnlyList<T>> GetAllAsync()
		{
			return await _context.Set<T>().ToListAsync();
		}

		public async Task<T> GetByIdAsync(string id)
		{
			var entity = await _context.Set<T>().FindAsync(id);
			return entity ?? throw new KeyNotFoundException($"Entity of type {typeof(T).Name} with ID '{id}' was not found.");
		}

		public async Task<IReadOnlyList<T>> GetAsync(Expression<Func<T, bool>> predicate)
		{
			return await _context.Set<T>().Where(predicate).ToListAsync();
		}

		public async Task<IReadOnlyList<T>> GetAsync(
			Expression<Func<T, bool>>? predicate = null,
			Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
			string? includeString = null,
			bool disableTracking = true)
		{
			IQueryable<T> query = _context.Set<T>();
			if (disableTracking) query = query.AsNoTracking();
			if (!string.IsNullOrWhiteSpace(includeString))
				query = query.Include(includeString);
			if (predicate != null)
				query = query.Where(predicate);
			if (orderBy != null)
				return await orderBy(query).ToListAsync();
			return await query.ToListAsync();
		}

		public async Task<IReadOnlyList<T>> GetAsync(
			Expression<Func<T, bool>>? predicate = null,
			Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
			List<Expression<Func<T, object>>>? includes = null,
			bool disableTracking = true)
		{
			IQueryable<T> query = _context.Set<T>();
			if (disableTracking) query = query.AsNoTracking();
			if (includes != null)
			{
				foreach (var include in includes)
					query = query.Include(include);
			}
			if (predicate != null)
				query = query.Where(predicate);
			if (orderBy != null)
				return await orderBy(query).ToListAsync();
			return await query.ToListAsync();
		}

		public async Task<PaginatedResult<T>> GetAllWithPaginationAsync(
			int pageIndex,
			int pageSize,
			Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
			List<Expression<Func<T, object>>>? includes = null,
			bool disableTracking = true)
		{
			IQueryable<T> query = _context.Set<T>();

			if (disableTracking) query = query.AsNoTracking();

			if (includes != null)
			{
				foreach (var include in includes)
					query = query.Include(include);
			}

			if (orderBy != null)
				query = orderBy(query);

			// Get total count
			var totalCount = await query.CountAsync();

			// Fetch paginated data
			var data = await query
				.Skip((pageIndex - 1) * pageSize)
				.Take(pageSize)
				.ToListAsync();

			return new PaginatedResult<T>(data, totalCount, pageIndex, pageSize);
		}


		public async Task<T> AddAsync(T entity)
		{
			_context.Set<T>().Add(entity);
			await _context.SaveChangesAsync();
			return entity;
		}

		public async Task UpdateAsync(T entity)
		{
			_context.Entry(entity).State = EntityState.Modified;
			await _context.SaveChangesAsync();
		}

		public async Task DeleteAsync(T entity)
		{
			_context.Set<T>().Remove(entity);
			await _context.SaveChangesAsync();
		}
	}

}
