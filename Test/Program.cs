using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Test
{

        class Program
        {
            static int[] chocolate = { 1, 3, 5, 7, 9, 40, 24 };
            static int students = 4;
        
        static void Main(string[] args)
        {
            int difference = ChocolateDistributionSolver.CalculateMinimumDiff(chocolate, students);
            Console.WriteLine(difference);
            Console.ReadLine();
        }

    }




    
}
