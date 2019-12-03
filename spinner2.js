const spinFunc = function(spinner) {
  for (const spin in spinner) {
    setTimeout(() => {
      process.stdout.write(spinner[spin]);
    },spin * 200);
  }
};

spinFunc(['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\n']);
