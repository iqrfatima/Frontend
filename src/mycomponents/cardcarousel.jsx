import { Card, CardHeader, CardContent } from "@/components/ui/card";
import pest from "../images/pestc.jpg";
import cy from "../images/agric.jpg";
import mk from "../images/mkp.jpg"
import wf from "../images/wf.jpg";

export function CardCarousel() {
  const navigateTo = (url) => {
    window.location.href = url; // Redirects the user to the specified URL
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full mx-auto">
      <div
        onClick={() => navigateTo("https://saurabhsinghdhami-plant-disease-detection-main-app-p8d5ks.streamlit.app/")}
        className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <Card>
          <CardHeader className="p-0">
            <img
              src={pest}
              alt="Pest Control"
              width="300"
              height="10"
              className="aspect-video rounded-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">Pest Control</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            Features: Crop pest identification, prevention strategies, risk alerts.
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              
            </div>
          </CardContent>
        </Card>
      </div>
      <div
        onClick={() => navigateTo("/agriwastecycle")}
        className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <Card>
          <CardHeader className="p-0">
            <img
              src={cy}
              alt="Agri waste cycle"
              width="400"
              height="225"
              className="aspect-video rounded-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">Agri waste cycle</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            Features: Waste tracking, recycling suggestions, sustainability metrics.
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              
            </div>
          </CardContent>
        </Card>
      </div>
      <div
        onClick={() => navigateTo("/weatherforecast")}
        className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <Card>
          <CardHeader className="p-0">
            <img
              src={wf}
              alt="Weather Forecast"
              width="400"
              height="225"
              className="aspect-video rounded-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">Weather Forecast</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            Features: Real-time weather updates, 5-day forecast, temperature trends.
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
                
            </div>
          </CardContent>
        </Card>
      </div>
      <div
        onClick={() => navigateTo("/marketprices")}
        className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <Card>
          <CardHeader className="p-0">
            <img
              src={mk}
              alt="Market Prices"
              width="400"
              height="225"
              className="aspect-video rounded-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">Market Prices</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            Features: Live market rates, trend analysis, price comparison.
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
