import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    //get method
    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray) => {
          const id = videoArray[0]
          const data = videoArray[1]

          return {
            id,
            ...data,
          }
        })
        .filter(video => {
          if (search) {
            return video.title.includes(search)
          }

          return true
        })
    }

    //post method
    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }
    //put method
    update(id, video) {
        this.#videos.set(id, video)
    }
    //delete method
    delete(id) {
        this.#videos.delete(id)
    }

}