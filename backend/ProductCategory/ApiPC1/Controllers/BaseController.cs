using Data.Models;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiPC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<T, R> : ControllerBase where T : Base where R : BaseRepository<T>
    {
        R repo = Activator.CreateInstance<R>();
        [HttpGet]
        public List<T> Get()
        {
            return repo.Get();
        }
        [HttpGet("{id}")]
        public T Get(int id)
        {
            return repo.Get(id);
        }
        [HttpPost]
        public void Post([FromBody] T model)
        {
            repo.Post(model);
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] T model)
        {
            repo.Put(model);
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repo.Delete(id);
        }
    }
}
