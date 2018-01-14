using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    public static class ChocolateDistributionSolver
    {
        /// <summary>
        /// Sort an int array using Radix sort algorithm.
        /// Time: O(n * w) - Space: O(n)
        /// 	Time: RadixSort takes O(n * int.MaxValue digits count) in worst case
        /// 	Space: O(n) for temp array
        /// </summary>
        /// <returns>The sorted array.</returns>
        /// <param name="arr">Arr.</param>
        static int[] RadixSort(int[] arr)
        {
            int i, j;
            int[] tmp = new int[arr.Length];
            for (int shift = 31; shift > -1; --shift)
            {
                j = 0;
                for (i = 0; i < arr.Length; ++i)
                {
                    bool move = (arr[i] << shift) >= 0;
                    if (shift == 0 ? !move : move)
                        arr[i - j] = arr[i];
                    else
                        tmp[j++] = arr[i];
                }
                Array.Copy(tmp, 0, arr, arr.Length - j, j);
            }
            return arr;
        }

        /// <summary>
        /// Calculates the minimum diff.
        /// Time: O(n) - Space: O(n)
        /// 	Time: sort takes O(n) + O(n) to find min
        /// 	Space: sort uses O(n)
        /// </summary>
        /// <returns>The minimum diff.</returns>
        /// <param name="packets">Packets.</param>
        /// <param name="students">Students.</param>
        public static int CalculateMinimumDiff(int[] packets, int students)
        {
            int minDiff = int.MaxValue;
            // Array.Sort(packets); // native sort use Quicksort: O(n*logn)
            packets = RadixSort(packets); // with Radix sort: O(n)
            for (var i = 0; i + students - 1 < packets.Length; i++)
                minDiff = Math.Min(packets[i + students - 1] - packets[i], minDiff);
            return minDiff;
        }
    }
}