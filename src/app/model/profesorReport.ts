export interface Staff {
    name:            string;
    alternateNames:  string[];
    species:         string;
    gender:          Gender;
    house:           string;
    dateOfBirth:     string;
    yearOfBirth:     number | string;
    wizard:          boolean;
    ancestry:        Ancestry;
    eyeColour:       string;
    hairColour:      string;
    wand:            Wand;
    patronus:        string;
    hogwartsStudent: boolean;
    hogwartsStaff:   boolean;
    actor:           string;
    alternateActors: AlternateActor[];
    alive:           boolean;
    image:           string;
}

export enum AlternateActor {
    Empty = "",
    MichaelGambon = "Michael Gambon",
}

export enum Ancestry {
    Empty = "",
    HalfBlood = "half-blood",
    PureBlood = "pure-blood",
    Squib = "squib",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export interface Wand {
    wood:   string;
    core:   Core;
    length: number | string;
}

export enum Core {
    DragonHeartstring = "dragon heartstring",
    Empty = "",
    UnicornTailHair = "unicorn tail-hair",
}
