export interface Grain {
    _id: string;
    uniqueId: string;
    project: string;
    grainName: string;
    schema: string;
    table: string;
    createdDate: Date;
    updatedDate: Date;
}
