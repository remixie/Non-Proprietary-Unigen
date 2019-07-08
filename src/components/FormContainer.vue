<template>
	<div class="form-container">
		<Addon/>
		<SQLInput/>
	</div>
</template>
<script>
import SQLInput from "./FormContainer/SQLInput";
import Addon from "./FormContainer/Addon";

export default {
	name: "FormContainer",
	data: function() {
		return {};
	},
	components: {
		SQLInput,
		Addon
	},
	methods: {}
};
</script>

<style>
.form-container {
	background-color: white;
	-webkit-border-radius: 0px 0px 10px 10px;
	-moz-border-radius: 0px 0px 10px 10px;
	border-radius: 0px 0px 10px 10px;
}

.field-row {
	padding: 0px 40px 0px 40px;
}

.btn-default {
	border-radius: 15px;
	background-color: white;
	font-weight: 800;
	color: #c85a2d;
	border: 1px solid #c85a2d;
}

.btn:focus {
	box-shadow: none;
}

textarea {
	background-color: transparent;
	border: 0px solid white;
	color: white;
}

::-webkit-input-placeholder {
	/* WebKit, Blink, Edge */
	color: #cce1f0;
}

:-moz-placeholder {
	/* Mozilla Firefox 4 to 18 */
	color: #cce1f0;
	opacity: 1;
}

::-moz-placeholder {
	/* Mozilla Firefox 19+ */
	color: #cce1f0;
	opacity: 1;
}

:-ms-input-placeholder {
	/* Internet Explorer 10-11 */
	color: #cce1f0;
}

::-ms-input-placeholder {
	/* Microsoft Edge */
	color: #cce1f0;
}
.awesomplete {
	display: block;
}

.awesomplete mark {
	background: transparent;
	padding: 0;
}

.awesomplete > ul {
	border-color: #91c4e7;
	background-color: white;
	opacity: 1;
	border-radius: 3px;
	box-shadow: none;
}

.awesomplete > ul > li:hover {
	background-color: #91c4e7;
}

.awesomplete li:hover mark {
	background: transparent;
}

form-group {
	position: relative;
	margin-bottom: 1.5rem;
	text-align: left;
}

.form-group .fa-times {
	color: red;
}

.form-control {
	background-color: #91c4e7;
	color: white;
}

.form-control-placeholder {
	position: absolute;
	top: 0;
	padding: 7px 0 0 30px;
	transition: all 200ms;
	color: white;
	opacity: 0.5;
	left: 0;
}

.form-control-placeholder {
	font-size: 80%;
	color: #007dc3;
	transform: translate3d(-10%, -100%, 0);
	opacity: 1;
}

.text-input svg {
	vertical-align: top;
	margin-top: 6px;
}

.btn-default .fa-chevron-right {
	color: #1e80bd;
	transform: translateX(-2px);
	-webkit-transform: translateX(-2px);
	transition: margin-left 0.25s ease;
	-webkit-transition: transform 0.25s ease;
}

.btn-default:hover .fa-chevron-right {
	color: white;
	transform: translateX(2px);
	-webkit-transform: translateX(2px);
	transition: margin-left 0.25s ease;
	-webkit-transition: transform 0.25s ease;
}

.btn-default .fa-chevron-left {
	color: #1e80bd;
	transform: translateX(2px);
	-webkit-transform: translateX(2px);
	transition: margin-left 0.25s ease;
	-webkit-transition: transform 0.25s ease;
}

.btn-default:hover .fa-chevron-left {
	color: white;
	transform: translateX(-2px);
	-webkit-transform: translateX(-2px);
	transition: margin-left 0.25s ease;
	-webkit-transition: transform 0.25s ease;
}

.btn-default:hover {
	background-color: white;
	background-color: #c85a2d;
	color: white;
	border: 1px solid #c85a2d;
}

.fa-times {
	cursor: pointer;
}

.transparent {
	background-color: transparent !important;
	margin: 0px 0px 0px 0px !important;
}

.text-input {
	vertical-align: middle;
	padding: 6px 10px 6px 10px;
	background-color: #91c4e7;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	margin: 5px 5px 5px 5px;
	display: inline-block;
	color: rgb(153, 153, 153);
}

input[type="file"] {
	cursor: pointer;
}

.padding {
	padding-top: 6px;
}

.note {
	font-weight: bold;
	color: #c85a2d;
	text-transform: uppercase;
	font-size: 10px;
	text-align: center;
	width: 100%;
	padding-top: 20px;
}

.text-input svg {
	margin-right: 5px;
}

#browse-btn {
	border-radius: 5px;
	z-index: 1;
	background-color: transparent;
	position: relative;
	margin: -5px 3px 0px -3px;
	color: white;
	text-align: left;
	padding-left: 4px;
}

input[type="text"],
input[type="number"] {
	background-color: #91c4e7;
	border: 1px solid #91c4e7;
}

input[type="radio"] {
	width: 30px;
}

@media only screen and (max-width: 486px) {
	#browse-btn {
		width: 80%;
	}

	.fa-times {
		display: none !important;
	}

	.text-input {
		width: 100%;
	}

	.field-row {
		padding: 0px 0px 0px 0px;
	}

	input {
		width: 80%;
	}
}
</style>