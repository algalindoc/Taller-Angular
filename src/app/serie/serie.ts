export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    linkWebPage: string;
    linkImage: string;
    description: string;

    constructor(id: number, name: string, seasons: number, channel: string, description: string, linkWebPage: string, linkImage: string) {
        this.id = id;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }

}