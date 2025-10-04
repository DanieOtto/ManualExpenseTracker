using Microcharts;

namespace ManualExpenseTracker.ViewModels;

public class HomeViewModel
{
    public Chart PieChart { get; }
    
    public HomeViewModel()
    {
        PieChart = new PieChart();
    }
}