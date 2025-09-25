function periksaDomain() {
  const allowedDomains = ['https://game24x.xyz/'];
  const referrer = document.referrer;
  let isAllowed = false;

  allowedDomains.forEach(domain => {
    if (referrer.startsWith(domain)) {
      isAllowed = true;
    }
  });

  if (!isAllowed) {
    window.location.replace("https://t.me/game24x");
  }
}

periksaDomain();
