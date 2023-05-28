export const checkEnvironment = (envVar: string, defaultValue?: string) => {
    if (!process.env[envVar]) {
      if (defaultValue) {
        return defaultValue;
      }
      throw new Error(`Please define the Enviroment variable"${envVar}"`);
    } else {
      return process.env[envVar] as string;
    }
  };