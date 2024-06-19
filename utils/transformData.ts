export interface FirestoreValue {
  stringValue?: string;
  integerValue?: string;
  booleanValue?: boolean;
  arrayValue?: { values: FirestoreValue[] };
  mapValue?: { fields: FirestoreFields };
}

export interface FirestoreFields {
  [key: string]: FirestoreValue;
}

export interface FirestoreDocument {
  name?: string;
  fields: FirestoreFields;
  createTime?: string;
  updateTime?: string;
}

export class FirestoreTransformer {
  private static transformFunctions: { [key: string]: (value: any) => any } = {
    stringValue: (value: string) => value,
    integerValue: (value: string) => parseInt(value, 10),
    booleanValue: (value: boolean) => value,
    arrayValue: (value: { values: FirestoreValue[] }) => value.values.map(v => FirestoreTransformer.transformField(v)),
    mapValue: (value: { fields: FirestoreFields }) => FirestoreTransformer.transformFields(value.fields),
  };

  static transformField(field: FirestoreValue): any {
    const key = Object.keys(field).find(k => FirestoreTransformer.transformFunctions[k]);
    return key ? FirestoreTransformer.transformFunctions[key](field[key as keyof FirestoreValue]) : null;
  }

  static transformFields(fields: FirestoreFields): any {
    const result: any = {};
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        result[key] = FirestoreTransformer.transformField(fields[key]);
      }
    }
    return result;
  }

  static transformDocument(doc: FirestoreDocument): any {
    return {
      id: doc.name?.split('/').pop(),
      ...FirestoreTransformer.transformFields(doc.fields),
      createTime: doc.createTime,
      updateTime: doc.updateTime,
    };
  }

  static transformFirebaseData(data: FirestoreDocument[] | FirestoreFields): any {
    if (Array.isArray(data)) {
      return data.map(doc => FirestoreTransformer.transformDocument(doc));
    } else if ('fields' in data) {
      return FirestoreTransformer.transformDocument(data as unknown as FirestoreDocument);
    }
    return FirestoreTransformer.transformFields(data as FirestoreFields);
  }
}
