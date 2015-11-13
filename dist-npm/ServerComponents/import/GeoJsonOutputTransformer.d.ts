import transform = require("./ITransform");
declare class GeoJsonOutputTransformer implements transform.ITransform {
    title: string;
    id: string;
    description: string;
    type: string;
    inputDataTypes: transform.InputDataType[];
    outputDataTypes: transform.OutputDataType[];
    geoJson: any[];
    constructor(title: string);
    initialize(opt: transform.ITransformFactoryOptions[], callback: (error) => void): void;
    create(config: any, opt?: transform.ITransformFactoryOptions[]): NodeJS.ReadWriteStream;
}
export = GeoJsonOutputTransformer;
