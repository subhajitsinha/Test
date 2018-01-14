using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest.Abstract
{
    public class Music:Features
    {
        public Music()
        {
            Console.WriteLine("Music Constructor");
        }

        public override void Download()
        {
            Console.WriteLine("Music downloading");
        }
    }
}
