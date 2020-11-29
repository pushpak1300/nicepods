export class Podcast {
    constructor(uuid, title, image, description, language, categories, website, author, itunes_id) {
        this.uuid = uuid;
        this.title = title;
        this.image = image;
        this.description = description;
        this.language = language;
        this.categories = categories;
        this.website = website;
        this.author = author;
        this.itunes_id = itunes_id;
    }

    static crateFromArray(data) {
        return new Podcast(data.uuid, data.title, data.image, data.description, data.language, data.categories, data.website, data.author, data.itunes_id);
    }
}

export const podcastConverter = {
    toFirestore: function (podcast) {
        return {
            uuid: podcast.uuid,
            title: podcast.title,
            image: podcast.image,
            description: podcast.description,
            language: podcast.language,
            categories: podcast.categories,
            website: podcast.website,
            author: podcast.author,
            itunes_id: podcast.itunes_id
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Podcast(data.uuid, data.title, data.image, data.description, data.language, data.categories, data.website, data.author, data.itunes_id)
    }
}