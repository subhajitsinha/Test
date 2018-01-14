using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest.Abstract
{
    class CallAbstractProgram
    {
        public static void Main(string[] args)
        {
            Music music = new Music();
            music.Download();
            Video video = new Video();
            video.Download();
            Console.ReadLine();
        }
    }
}
