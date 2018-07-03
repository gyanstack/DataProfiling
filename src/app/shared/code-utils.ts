export class DropDown {
    id: string;
    description: String;

    public constructor(init: DropDown) {
        Object.assign(this, init);
    }
}

export const TrackList: Array<DropDown> = [
    new DropDown({ id: '1', description: 'Changes' }),
    new DropDown({ id: '2', description: 'Count' }),
    new DropDown({ id: '3', description: 'Inactivation' }),
    new DropDown({ id: '4', description: 'New' }),
    new DropDown({ id: '5', description: 'Removals' }),
    new DropDown({ id: '6', description: 'Total' }),
    new DropDown({ id: '7', description: 'Totals' })
];

export const CalculateList: Array<DropDown> = [
    new DropDown({ id: '1', description: 'SUM' }),
    new DropDown({ id: '2', description: 'COUNT' }),
    new DropDown({ id: '3', description: 'INACTIVATION' }),
    new DropDown({ id: '4', description: 'Commitment Start Date != null && Commitment Expiry date == null' }),
    new DropDown({ id: '5', description: 'COUNT = 0' }),
    new DropDown({ id: '6', description: 'COUNT > 1' }),
    new DropDown({ id: '7', description: 'NULL' }),
    new DropDown({ id: '8', description: 'PRIMARY > 1' })
];


