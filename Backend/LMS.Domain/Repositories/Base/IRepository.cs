using LMS_BAckend.Domain.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LMS_Infrastructure.Repository
{
	public interface IRepository<T> where T : class
	{
		Task<IReadOnlyList<T>> GetAllAsync();

		Task<PaginatedResult<T>> GetAllWithPaginationAsync(
		int pageIndex,
		int pageSize,
		Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
		List<Expression<Func<T, object>>>? includes = null,
		bool disableTracking = true);


		Task<T> GetByIdAsync(string id);

		Task<IReadOnlyList<T>> GetAsync(
			Expression<Func<T, bool>> predicate);

		Task<IReadOnlyList<T>> GetAsync(
			Expression<Func<T, bool>>? predicate = null,
			Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
			string? includeString = null,
			bool disableTracking = true);

		Task<IReadOnlyList<T>> GetAsync(
			Expression<Func<T, bool>>? predicate = null,
			Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
			List<Expression<Func<T, object>>>? includes = null,
			bool disableTracking = true);

		Task<T> AddAsync(T entity);
		Task UpdateAsync(T entity);
		Task DeleteAsync(T entity);
	}
}
