function MessageText(textResponse, number) {
    const data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        preview_url: true,
        body: textResponse,
      },
    });
    return data;
  }

  module.exports = {
    MessageText
  }