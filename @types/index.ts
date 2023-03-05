import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Asset, Entry, EntryFields } from "contentful";

export interface IListItemFields {
    coverImage: Asset;
    propertyName: EntryFields.Symbol;
    briefDescription: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    price: EntryFields.Number;
    address: EntryFields.Symbol;
    bedRooms: EntryFields.Number;
    bathRooms: EntryFields.Number;
    size: EntryFields.Integer;
    propertyPhotos: Asset[];
    description: EntryFields.Text;
    descriptionPhoto: Asset;
    fullDescription?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    address2?: EntryFields.Location;
}

export interface IAboutMeFields {
    biography: EntryFields.Text;
    name: EntryFields.Symbol;
    profilePic: Asset;
}

export type TAboutMe = Entry<IAboutMeFields>;
export type TListItem = Entry<IListItemFields>;