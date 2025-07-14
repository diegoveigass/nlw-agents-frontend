import { useRooms } from '@/http/use-rooms'
import { dayjs } from '@/lib/dayjs'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function RoomList() {
  const { data } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>Acesso rápido para as salas criadas</CardDescription>
      </CardHeader>
      <CardContent className="flex max-h-96 flex-col gap-3 overflow-auto">
        {data?.map((room) => {
          return (
            <Link
              to={`/room/${room.id}`}
              key={room.id}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {dayjs().from(room.createdAt)}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>

              <span className="flex items-center gap-1 text-sm">
                Entrar <ArrowRight className="size-3" />
              </span>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
