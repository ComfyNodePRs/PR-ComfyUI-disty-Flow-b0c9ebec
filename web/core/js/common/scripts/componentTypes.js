export const  componentTypes = {
    'workflowInput': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'default', label: 'Default Value', type: 'text' },
    ],
    'seeder': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
    ],
    'stepper': [
        { name: 'id', type: 'text', label: 'ID' },
        { name: 'label', type: 'text', label: 'Label' },
        { name: 'minValue', type: 'number', label: 'Min Value', value: 0.1 },
        { name: 'maxValue', type: 'number', label: 'Max Value', value: 100.0 },
        { name: 'step', type: 'number', label: 'Step', value: 0.1 },
        { name: 'defValue', type: 'number', label: 'Default Value', value: 6 },
        { name: 'precision', type: 'number', label: 'Precision', value: 1 },
        { name: 'scaleFactor', type: 'number', label: 'Scale Factor', value: 10 },
    ],
    'dropdown': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'url', label: 'URL', type: 'text' },
        { name: 'key', label: 'Key', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
    ],
    'multiStepper': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
    ],
    'dropdownStepper': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
    ],
    'dimensionSelector': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'defaultWidth', label: 'Default Width', type: 'number' },
        { name: 'defaultHeight', label: 'Default Height', type: 'number' },
    ],
    'imageLoader': [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
    ],
    'configCustomNode': [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'installUrl', label: 'Install URL', type: 'text' },
        { name: 'downloadModal', label: 'Download Modal', type: 'textarea' },
    ],
};