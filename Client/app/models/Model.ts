
  export interface Merchant {
        image: string;
        name: string;
        price: string;
        shipping: string;
        delivery: string;
    }

    export interface Screen {
        size: string;
        resolution: string;
        type: string;
        pixels: string;
        protection: string;
    }

    export interface Chipset {
        brand: string;
        speed: string;
        processor: string;
        processorType: string;
        graphics: string;
    }

    export interface Camera {
        rear: string;
        front: string;
        videoResolution: string;
        features: string;
    }

    export interface Specifications {
        operatingSystem: string;
        osVersion: string;
        deviceType: string;
        usbConnectorType: string;
        features: string;
        dimensions: string;
        weight: string;
        connectivity: string;
        audioJack: string;
        color: string;
        buildMaterial: string;
        warranty: string;
    }

    export interface Storage {
        internal: string;
        availableForUsage: string;
        cardSlot: string;
        maxCardCapacity: string;
    }

    export interface Communication {
        simCardSlots: string;
        networkType: string;
        simCardType: string;
        simCardDetails: string;
    }

    export interface Battery {
        capacity: string;
        type: string;
        removable: string;
        wirelessCharging: string;
        fastCharging: string;
    }

    export interface Stars {
        five: string;
        four: string;
        three: string;
        two: string;
        one: string;
    }

    export interface Rating {
        type: string;
        value: string;
        ratings: string;
        reviews: string;
        stars: Stars;
    }

    export interface Item {
        id: string;
        pricebabaId: string;
        ldjson: string;
        images: string[];
        name: string;
        viewCount: string;
        hasLaunched: string;
        lowestPrice: string;
        lowestStore: string;
        vfmScore: string;
        colors: string[];
        pros: string[];
        cons: string[];
        merchants: Merchant[];
        launchedOn: string;
        modelName: string;
        screen: Screen;
        chipset: Chipset;
        camera: Camera;
        specifications: Specifications;
        storage: Storage;
        communication: Communication;
        battery: Battery;
        brief: string;
        detailed: string;
        videoUrl: string;
        ratings: Rating[];
    }
