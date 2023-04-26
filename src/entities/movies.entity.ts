import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
class Movie {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar", length: 50, unique: true })
  name: string
  
  @Column({ type: "text", default: null })
  description?: string | null

  @Column({ type: "int" })
  duration: number

  @Column({ type: "decimal"})
  price: number
}

export default Movie;
