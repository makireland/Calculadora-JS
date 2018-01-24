var Validation = function (fieldId) {
    this.fieldId = fieldId;
}

Validation.prototype.add = function (field){
    var val = document.getElementById(this.fieldId).value;
    var val2 = document.getElementById(field).value;
    
}

Validation.prototype.subtraction = function (field){
    var val = document.getElementById(this.fieldId).value;
    var val2 = document.getElementById(field).value;
}

Validation.prototype.multiply = function (field){
    var val = document.getElementById(this.fieldId).value;
    var val2 = document.getElementById(field).value;
}

Validation.prototype.division = function (field){
    var val = document.getElementById(this.fieldId).value;
    var val2 = document.getElementById(field).value;
}