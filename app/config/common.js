/**
 * 导入加密模块
 */
import CryptoJS from 'crypto-js';

functions.common = {
	/**
	 * 需要加密的字符串
	 * @param message    加密的字符串
	 * @param key    加密解密的key
	 * @returns {string}    加密后的串
	 */
	encryptByDES (message, key) {
		var keyHex    = CryptoJS.enc.Utf8.parse(key);
		var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
			mode   : CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		return encrypted.toString();
	},


	/**
	 * 解密
	 * @param ciphertext    加密后的串
	 * @param key    加密解密的key
	 * @returns {string}    解密后的原密码
	 */
	decryptByDES (ciphertext, key) {
		var keyHex    = CryptoJS.enc.Utf8.parse(key);
		var decrypted = CryptoJS.DES.decrypt({
			ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
		}, keyHex, {
			mode   : CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		return decrypted.toString(CryptoJS.enc.Utf8);
	}
};