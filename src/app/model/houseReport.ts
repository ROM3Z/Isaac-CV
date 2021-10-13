export interface House {
    name:            string;
    alternateNames:  string[];
    species:         Species;
    gender:          Gender;
    house:           HouseEnum;
    dateOfBirth:     string;
    yearOfBirth:     number | string;
    wizard:          boolean;
    ancestry:        Ancestry;
    eyeColour:       EyeColour;
    hairColour:      string;
    wand:            Wand;
    patronus:        string;
    hogwartsStudent: boolean;
    hogwartsStaff:   boolean;
    actor:           string;
    alternateActors: string[];
    alive:           boolean;
    image:           string;
}

export enum Ancestry {
    Empty = "",
    HalfBlood = "half-blood",
    Muggleborn = "muggleborn",
    PureBlood = "pure-blood",
}

export enum EyeColour {
    Black = "black",
    Blue = "blue",
    Brown = "brown",
    Empty = "",
    Green = "green",
    Grey = "grey",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export enum HouseEnum {
    Gryffindor = "Gryffindor",
    Slytherin = "Slytherin",
    Ravenclaw = "Ravenclaw",
    Hufflepuff = "Hufflepuff",
}

export enum Species {
    Ghost = "ghost",
    HalfGiant = "half-giant",
    Human = "human",
    Werewolf = "werewolf",
}

export interface Wand {
    wood:   string;
    core:   Core;
    length: number | string;
}

export enum Core {
    DragonHeartstring = "dragon heartstring",
    Empty = "",
    PhoenixFeather = "phoenix feather",
    UnicornTailHair = "unicorn tail-hair",
}
