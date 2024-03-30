import stylesBody from "../ItemList/styles.module.scss";

const HeaderAgent = () => {
	return (
		<div className={stylesBody.body}>
			<p className={stylesBody.data_header}>Avatar</p>
			<p className={stylesBody.data_header}>Nombre</p>
			<p className={stylesBody.data_header}>Raza</p>
			<p className={stylesBody.data_header}>Peso</p>
			<p className={stylesBody.data_header}>Cumpleaños</p>
			<p className={stylesBody.data_header}>Dueño</p>
			<p className={stylesBody.data_header}>Whatsapp</p>
			<p className={stylesBody.data_header}>QR Code</p>
			<p className={stylesBody.data_header}>Actions</p>
		</div>
	);
};

export default HeaderAgent;
