using System;

namespace GitHubCopilot
{
    class Program
    {
        static void Main(string[] args)
        {
            // return current day of the week and set to variale today
            var today = DateTime.Now.DayOfWeek;
        }

        //calculate week number by given date
        public static int GetWeekNumber(DateTime date)
        {
            CultureInfo ciCurr = CultureInfo.CurrentCulture;
            int weekNum = ciCurr.Calendar.GetWeekOfYear(date, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday);
            return weekNum;
        }

        // read json file and parse to type Article
        public static Article ReadJsonFile(string fileName)
        {
            // read json file
            string json = System.IO.File.ReadAllText(fileName);

            // parse to type Article
            Article article = JsonConvert.DeserializeObject<Article>(json);

            return article;
        }

        // create class Article
        public class Article
        {
            public string Title { get; set; }
            public string Description { get; set; }
            public string Url { get; set; }
            public string UrlToImage { get; set; }
            public string PublishedAt { get; set; }
        }
        
    }
}