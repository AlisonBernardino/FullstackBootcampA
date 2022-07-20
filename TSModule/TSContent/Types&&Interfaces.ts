// Interfaces
// >>> Samples
interface droneInterface {
  type: string;
  modality: 'Air' | 'Water';
  isMultiPartsCompatible: boolean;
  showDroneTypeMessage(outputMessage: string): void;
}

interface camoDrones extends droneInterface {
  camouflageMainColor: string;
  camouflageSecondaryColor: string;
  isMultiPartsCompatible: true;
}

interface fuelType extends droneInterface {
  fuelType: string;
}

interface reinforcedMaterial extends droneInterface {
  reinforcedMaterialType: string;
}

// Types
type specialDeviceType = fuelType | reinforcedMaterial;

interface extraSpecs extends droneInterface {
  isExtraStorageAvailable: boolean;
  isControlAmplifiedRangeAvailable: boolean;
  extraStorageCapacity: string;
  cameraQuality: string;
  amplifiedRangeCapacity: string;
}

const droneA: droneInterface = {
  type: 'AX02',
  modality: 'Air',
  isMultiPartsCompatible: true,
  showDroneTypeMessage: (outputMessage) => `${outputMessage}.`,
};

droneA.showDroneTypeMessage(`${droneA.type}`);

const droneB: droneInterface = {
  type: 'WX01',
  modality: 'Water',
  isMultiPartsCompatible: true,
  showDroneTypeMessage: (outputMessage) => `${outputMessage}`,
};

droneB.showDroneTypeMessage(`${droneB.type}`);

const droneC: extraSpecs = {
  type: 'AM003',
  modality: 'Air',
  isMultiPartsCompatible: true,
  isExtraStorageAvailable: true,
  isControlAmplifiedRangeAvailable: true,
  extraStorageCapacity: '2TB',
  cameraQuality: 'Ultra HD - 8K',
  amplifiedRangeCapacity: '700m',
  showDroneTypeMessage: (outputMessage) => `${outputMessage}`,
};

droneC.showDroneTypeMessage(`${droneC.type}`);

const droneD: specialDeviceType = {
  type: 'DK001',
  modality: 'Water',
  isMultiPartsCompatible: true,
  fuelType: 'Gasoline',
  reinforcedMaterialType: 'Metal',
  showDroneTypeMessage: (outputMessage) => `${outputMessage}`,
};

// Grabbing and handling the HTML "input" element
const firstTitleSelection = document.getElementById(
  'firstTitleField'
) as HTMLInputElement;
firstTitleSelection.addEventListener('input', (event) => {
  const selectionItem = event.currentTarget as HTMLInputElement;
  console.log(selectionItem.value);
});
