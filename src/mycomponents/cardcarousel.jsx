/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w46vmnYuXva
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export function CardCarousel() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full mx-auto">
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Pest Control</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 2 days ago</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Modified 1 day ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Agri waste cycle</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 1 day ago</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Modified 5 hours ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Weather Forecast</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 3 days ago</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Modified 2 days ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Market Prices</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 4 days ago</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Modified 3 days ago</div>
        </CardContent>
      </Card>
    </div>
  )
}