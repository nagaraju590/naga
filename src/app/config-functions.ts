export const get = (url, success = (data) => {}, onError = (err) => {}) => {
    const xmlHttp = new XMLHttpRequest();

    function onreadystatechangeHandler() {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        success(data);
      } else if (this.readyState === 4 && this.status !== 200) {
        if (onError) {
          onError({
            readyState: this.readyState,
            statusCode: this.status,
            statusText: this.statusText,
          });
        }
      }
    }
    xmlHttp.onreadystatechange = onreadystatechangeHandler;
    xmlHttp.open('GET', url, true);
    xmlHttp.send();
  };
export const loadConfigFile = (
    {
      configFilePath = 'config.json',
      runtimeConfigurationWindowKey = 'RUNTIME_CONFIG',
    },
    onConfigLoaded = (data) => {}
  ) => {
    get(
      configFilePath,
      (data) => {
        (window as any)[runtimeConfigurationWindowKey] = data;
        if (onConfigLoaded) {
          onConfigLoaded(data);
        }
      },
      (err) => {
        console.log('Deployment Error!', {
          error: 'Error fetching the config file.',
          details: err,
        });
      }
    );
  };

  /**
   * gets the fullConfigFileUrl from the consumers dom.
   * EX: If the consumer has the tag
   * <script src="cdn/some/url/quick-quote-app.x.y.z.js">
   *
   * it will return the value "cdn/some/url/config.json"
   */
export function getConfigFilePath(
    appName: string = 'h2o-digital-widgets',
    configFilePath = null
  ) {
    const quoteScriptPath: HTMLScriptElement = document.querySelector(
      `script[src*="${appName}"]`
    );
    if (!quoteScriptPath) {
      console.warn(
        'Bundle script not found. Getting config from environment Variable',
        configFilePath
      );
      return configFilePath;
    }
    const { src } = quoteScriptPath;
    const baseUrlArray = src.split('/');
    const baseUrl = baseUrlArray.slice(0, -1).join('/');
    return `${baseUrl}/config.json?${new Date().getTime()}`;
  }
