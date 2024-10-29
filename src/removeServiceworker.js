// https://medium.com/@nekrtemplar/self-destroying-serviceworker-73d62921d717
console.log("Removing service workers");
if (typeof window !== "undefined") {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
      console.log("Service worker unregistered");
    }
  });
}
