using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test;

namespace ConsoleTest
{
    public class Program
    {
        static void Main(string[] args)
        {
            //same method name in interface
            IFullTImeEmployee emp1 = new Salary();
            emp1.GetSum();
            IPartTimeEmployee emp2 = new Salary();
            emp2.GetSum();

            //which value a method is going to get
            int c = 2;
            int d = 4;
            GenerateSum(c,d);

            //call a static class from a static method
            Test.Calculate();

            //get converted value using generic
            var value = GetModifiedValue<int>("1");
            Console.WriteLine(value);

            //return two parameters from a function in form of dictionary
            var f = Location(1, 3, 5, 6);
            Console.WriteLine(f.Value+','+f.Key);

            int[] chocolate = { 1, 3, 5, 7, 9, 40, 24 };
            int students = 4;
            int difference = ChocolateDistributionSolver.CalculateMinimumDiff(chocolate, students);
            Console.WriteLine(difference);

            int i = 0;
            Console.WriteLine(i.GetType());

            string a = "a";
            Console.WriteLine(a.GetType());

            Console.ReadLine();
        }

        public static KeyValuePair<int, int> Location(int p_1, int p_2, int p_3, int p_4)
        {
            return new KeyValuePair<int, int>(p_2 - p_1, p_4 - p_3);
        }

        public static void GenerateSum(int a,int b)
        {
            a = 100;
            b = 200;
            Console.WriteLine(a + b);
        }

        private static T GetModifiedValue<T>(string value)
        {
            object val = value;
            return (T)Convert.ChangeType(value, typeof(T));
        }
}

    public static class Test
    {
        public static void Calculate()
        {
            Console.WriteLine("Hello Static Calculate");
        }
    }

    public static class Point
    {
        public static int XLocation { get; set; }
        public static int YLocation { get; set; }
    }
}
