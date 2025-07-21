using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_Infrastructure.Context;

namespace LMS_Infrastructure.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DBContext _context;

        public Repository(DBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await Task.FromResult(_context.Set<T>().ToList());
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await Task.FromResult(_context.Set<T>().Find(id));
        }

        public async Task AddAsync(T entity)
        {
            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = _context.Set<T>().Find(id);
            if (entity != null)
            {
                _context.Set<T>().Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
