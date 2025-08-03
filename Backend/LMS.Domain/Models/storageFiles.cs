using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace LMS_Backend.Domain.Models
{
    public enum FileType { Video, Document, Image, Other }

    public class StorageFile
    {
        [Key]
        public string Id { get; set; } = string.Empty;
        [NotNull]
        public string UploaderId { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public FileType Type { get; set; }
        public int Size { get; set; }
        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
    }
}