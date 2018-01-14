using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest
{
    public class Salary:IFullTImeEmployee,IPartTimeEmployee
    {
        public Salary()
        { 

        }
        void IFullTImeEmployee.GetSum()
        {
            Console.WriteLine("From Full Timer");   
        }
        void IPartTimeEmployee.GetSum()
        {
            Console.WriteLine("From Part Timer");
        }
    }
}
