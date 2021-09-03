using Data.Context;
using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public abstract class BaseRepository<T> where T : Base
    {
        public void Post(T model)
        {
            using (var connect = new ProdutoContext())
            {
                connect.Set<T>().Add(model);
                connect.SaveChanges();
            }
        }
        public List<T> Get()
        {
            List<T> list = new List<T>();
            using (var connect = new ProdutoContext())
            {
                //list = connect.Set<T>().ToList();
            }
            return list;
        }
        public T Get(int id)
        {
            T model = Activator.CreateInstance<T>();
            using (var connect = new ProdutoContext())
            {
                model = connect.Set<T>().Find(id);
            }
            return model;
        }
        public void Put(T model)
        {
            using (var connect = new ProdutoContext())
            {
                connect.Entry<T>(model).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                connect.SaveChanges();
            }
        }
        public void Delete(int id)
        {
            using (var connect = new ProdutoContext())
            {
                connect.Entry<T>(Get(id)).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                connect.SaveChanges();
            }
        }
    }
}
