using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Academia.Core.Common.Models
{
	public class PaginatedResult<T>
	{
		public IReadOnlyList<T> Data { get; set; } = new List<T>();
		public int TotalCount { get; set; }
		public int PageIndex { get; set; }
		public int PageSize { get; set; }
		public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);

		public PaginatedResult() { }

		public PaginatedResult(IReadOnlyList<T> data, int count, int pageIndex, int pageSize)
		{
			Data = data;
			TotalCount = count;
			PageIndex = pageIndex;
			PageSize = pageSize;
		}
	}
}