using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest.Abstract
{
    public abstract class Features
    {
        string UserName = "";
        string Password = "";

        public Features()
        {
            Console.WriteLine("This is from base abstract class");
            this.UserName = "default";
            this.Password = "default";
            Console.WriteLine("Initializing music/video database library");
        }

        void Login( string UserName,string Password)
        {
            Console.WriteLine("Login credentials initializes");
        }

        public abstract void Download();
    }
}
