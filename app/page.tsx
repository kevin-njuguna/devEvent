import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { IEvent } from "@/database/event.model"

export const dynamic = "force-dynamic"

const Page = async () => {
  const response = await fetch("/api/events")

  if (!response.ok) {
    return (
      <section>
        <h1 className="text-center">The Hub For Every Tech Event</h1>
        <p className="text-center mt-5">
          Hackathons, Meetups, and Conferences, All in One place
        </p>
        <p className="text-center mt-10 text-red-500">
          Events unavailable
        </p>
      </section>
    )
  }

  const { events } = await response.json()

  return (
    <section>
      <h1 className="text-center">The Hub For Every Tech Event</h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured</h3>
        <ul className="events">
          {events?.map((event: IEvent) => (
            <li key={event._id}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
