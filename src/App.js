import "./App.css";

/* Import module to handle semantic versioning */
import semver from "semver";

import Footer from "./components/Footer";

import WelcomeScreen from "./components/WelcomeScreen";
import UpdateRequiredScreen from "./components/UpdateRequiredScreen";

const App = () => {
  /* query parameters */
  const queryParams = new URLSearchParams(window.location.search);
  const appVersion = queryParams.get("appversion");
  const os = queryParams.get("os");

  /* Function to check if the app version is outdated */
  const isUpdateRequired = () => {
    /* If the OS is Windows */
    if (os === "win") {
      // any app version older than 1.5.0 is outdated
      return semver.lt(appVersion, "1.5.0");
      /* If the OS is Mac */
    } else if (os === "mac") {
      // check against multiple outdated versions
      const outdatedVersions = ["1.5.100", "1.5.120", "1.5.123"];
      return (
        outdatedVersions.some(
          /* check if the app version is equals to any of the specified outdated versions */
          (outdatedVersion) => semver.eq(appVersion, outdatedVersion)
          /* if the version is older than 0.28.0, the app is also outdated */
        ) || semver.lt(appVersion, "0.28.0")
      );
    }

    return false;
  };

  return (
    <div className="App">
      {/* conditionally render screens */}
      {isUpdateRequired() ? <UpdateRequiredScreen /> : <WelcomeScreen />}
      <Footer />
    </div>
  );
};

export default App;
