using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class CalculationController : ApiController
    {
        // GET: Calculation
        [Route("Sum")]
        public IHttpActionResult GetSum(int a,int b)
        {
            return Ok(a + b);
        }
    }
}