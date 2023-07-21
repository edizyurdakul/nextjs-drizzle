import { db } from "@/lib/db";
import { item } from "@/lib/db/schema";

const get_items = db.select().from(item).prepare();

export default async function Home() {
  const items = await get_items.execute();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items.length ? (
        <div>
          {items.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      ) : (
        <div> No items </div>
      )}
    </main>
  );
}
