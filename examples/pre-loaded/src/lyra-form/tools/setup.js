export default {
  createSetupFromObject: params => {
    return {
      'kr-client-domain': params.clientUrl,
      'kr-public-key': params.publicKey,
      'kr-form-token': params.formToken,
      'kr-post-url-success': params["kr-post-url-success"],
      'kr-post-url-refused': params["kr-post-url-refused"],
    };
  }
};