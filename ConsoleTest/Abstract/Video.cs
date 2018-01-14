using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest.Abstract
{
    public class Video:Features
    {
        public Video()
        {
            Console.WriteLine("Video constructor");
        }

        public override void Download()
        {
            Console.WriteLine("Video Downloading");
        }
    }
}
