export interface PaisSmall {
    name: Name;
    cca3: string;
}

export interface Pais {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Europe = "Europe",
}

export interface Currencies {
    EUR?: All;
    ISK?: All;
    BAM?: BAM;
    RON?: All;
    RUB?: All;
    MDL?: All;
    CHF?: All;
    GBP?: All;
    JEP?: All;
    UAH?: All;
    CZK?: All;
    DKK?: All;
    PLN?: All;
    BGN?: All;
    SEK?: All;
    IMP?: All;
    NOK?: All;
    ALL?: All;
    HUF?: All;
    GGP?: All;
    BYN?: All;
    GIP?: All;
    FOK?: All;
    HRK?: All;
    MKD?: All;
    RSD?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    ita?: string;
    isl?: string;
    eng?: string;
    gle?: string;
    cnr?: string;
    bos?: string;
    hrv?: string;
    srp?: string;
    ron?: string;
    spa?: string;
    rus?: string;
    fra?: string;
    lav?: string;
    sqi?: string;
    gsw?: string;
    roh?: string;
    nrf?: string;
    ukr?: string;
    ces?: string;
    slk?: string;
    swe?: string;
    dan?: string;
    pol?: string;
    mlt?: string;
    bul?: string;
    glv?: string;
    nld?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    deu?: string;
    hun?: string;
    nfr?: string;
    nor?: string;
    bel?: string;
    ell?: string;
    slv?: string;
    fin?: string;
    cat?: string;
    bar?: string;
    lit?: string;
    ltz?: string;
    lat?: string;
    por?: string;
    tur?: string;
    est?: string;
    fao?: string;
    mkd?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
