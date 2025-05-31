const hostname = window.location.hostname;

export const ClientOnlyComponent = () => {
	return <div>{hostname}</div>;
};
