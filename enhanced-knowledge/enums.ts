enum CustomState {
  On = "Activated",
  Off = "Deactivated",
}

const customStatus: CustomState = CustomState.Off;
console.log(customStatus);

enum CrazyEnum {
  Off = 15,
  On = "true",
}

const crazyVar: CrazyEnum = CrazyEnum.On;
console.log(crazyVar, CrazyEnum.Off);
