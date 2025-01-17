"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DataRow = _interopRequireDefault(require("./Components/DataRow"));

var _Pagination = _interopRequireDefault(require("./Components/Pagination"));

var _PerPage = _interopRequireDefault(require("./Components/PerPage"));

var _flatten = _interopRequireDefault(require("core-js/fn/array/flatten"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DynamicDataTable = /*#__PURE__*/function (_Component) {
  _inherits(DynamicDataTable, _Component);

  var _super = _createSuper(DynamicDataTable);

  function DynamicDataTable(props) {
    var _this;

    _classCallCheck(this, DynamicDataTable);

    _this = _super.call(this, props);
    _this.state = {
      checkedRows: []
    };
    _this.className = _this.className.bind(_assertThisInitialized(_this));
    _this.changePerPage = _this.changePerPage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DynamicDataTable, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      if (nextProps.rows !== this.props.rows) {
        this.setState({
          checkedRows: []
        });
      }
    }
  }, {
    key: "className",
    value: function className() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          onMouseUp = _this$props.onMouseUp,
          onMouseDown = _this$props.onMouseDown,
          hoverable = _this$props.hoverable,
          className = _this$props.className;
      return (0, _classnames["default"])([className, {
        'table-hover': onClick !== DynamicDataTable.noop || onMouseUp !== DynamicDataTable.noop || onMouseDown !== DynamicDataTable.noop || hoverable
      }]);
    }
  }, {
    key: "getFields",
    value: function getFields() {
      var rows = this.props.rows;
      var _this$props2 = this.props,
          fieldsToExclude = _this$props2.fieldsToExclude,
          fieldMap = _this$props2.fieldMap,
          fieldOrder = _this$props2.fieldOrder;
      var fields = [];

      if (!fieldsToExclude) {
        fieldsToExclude = [];
      }

      if (!fieldMap) {
        fieldMap = [];
      }

      if (!rows || !rows.length) {
        return [];
      }

      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var rowFields = Object.keys(row);

        for (var j = 0; j < rowFields.length; j++) {
          var rowFieldName = rowFields[j];
          var exists = false;

          for (var k = 0; k < fields.length; k++) {
            var field = fields[k];

            if (field.name === rowFieldName) {
              exists = true;
              break;
            }
          }

          if (!exists) {
            var label = rowFieldName.replace(new RegExp('_', 'g'), ' ').replace(/^(.)|\s+(.)/g, function ($1) {
              return $1.toUpperCase();
            }).trim();
            fields.push({
              name: rowFieldName,
              label: label
            });
          }
        }
      }

      var regExpsToExclude = fieldsToExclude.filter(function (field) {
        return field.constructor && field.constructor === RegExp;
      });

      for (var _i = 0; _i < fields.length; _i++) {
        var _field = fields[_i];
        var shouldExclude = false; // Field exclusion

        if (fieldsToExclude.indexOf(_field.name) !== -1) {
          shouldExclude = true;
        } else {
          for (var _j = 0; _j < regExpsToExclude.length; _j++) {
            if (regExpsToExclude[_j].test(_field.name)) {
              shouldExclude = true;
              break;
            }
          }
        }

        if (shouldExclude) {
          fields.splice(_i, 1);
          _i--;
          continue;
        } // Field mapping


        if (fieldMap.hasOwnProperty(_field.name)) {
          fields[_i].label = fieldMap[_field.name];
        }
      }

      if (fieldOrder.length) {
        var orderedFields = Array(fieldOrder.length);

        var _loop = function _loop(_i2) {
          var field = fields[_i2];
          var j = fieldOrder.findIndex(function (query) {
            if (query.constructor) {
              switch (query.constructor) {
                case RegExp:
                  return query.test(field.name);

                default:
                  return query === field.name;
              }
            }

            return false;
          });

          if (j !== -1) {
            var entry = orderedFields[j];

            if (!entry) {
              orderedFields.splice(j, 1, field);
            } else if (Array.isArray(entry)) {
              orderedFields[j].push(field);
            } else {
              orderedFields[j] = [entry, field];
            }

            return "continue";
          }

          orderedFields.push(field);
        };

        for (var _i2 = 0; _i2 < fields.length; _i2++) {
          var _ret = _loop(_i2);

          if (_ret === "continue") continue;
        }

        return (0, _flatten["default"])(orderedFields);
      }

      return fields;
    }
  }, {
    key: "changeOrder",
    value: function changeOrder(field) {
      var props = this.props;
      var newOrderByDirection = 'asc';

      if (!props.changeOrder) {
        return;
      }

      if (props.orderByField === field.name) {
        newOrderByDirection = props.orderByDirection === 'asc' ? 'desc' : 'asc';
      }

      props.changeOrder(field.name, newOrderByDirection);
    }
  }, {
    key: "changePerPage",
    value: function changePerPage(limit) {
      var changePerPage = this.props.changePerPage;

      if (!changePerPage) {
        return;
      }

      changePerPage(limit);
    }
  }, {
    key: "checkboxIsChecked",
    value: function checkboxIsChecked(row) {
      var checkedRows = this.state.checkedRows;
      var _this$props3 = this.props,
          rows = _this$props3.rows,
          isCheckboxChecked = _this$props3.isCheckboxChecked,
          disabledCheckboxes = _this$props3.disabledCheckboxes;

      if (isCheckboxChecked !== DynamicDataTable.noop) {
        return isCheckboxChecked(row, rows);
      }

      if (row === 'all') {
        return checkedRows.length === rows.filter(function (_ref) {
          var id = _ref.id;
          return !disabledCheckboxes.includes(id);
        }).length;
      }

      var index = -1;
      var selected = JSON.stringify(row);

      for (var i = 0; i < checkedRows.length; i++) {
        var current = JSON.stringify(checkedRows[i]);

        if (current === selected) {
          index = i;
          break;
        }
      }

      return index !== -1;
    }
  }, {
    key: "checkboxChange",
    value: function checkboxChange(event, row) {
      var _this$props4 = this.props,
          rows = _this$props4.rows,
          onMasterCheckboxChange = _this$props4.onMasterCheckboxChange,
          onCheckboxChange = _this$props4.onCheckboxChange,
          isCheckboxChecked = _this$props4.isCheckboxChecked,
          disabledCheckboxes = _this$props4.disabledCheckboxes;
      var target = event.target;

      if (row === 'all') {
        if (onMasterCheckboxChange !== DynamicDataTable.noop) {
          onMasterCheckboxChange(event, rows);
        }
      } else if (onCheckboxChange !== DynamicDataTable.noop) {
        onCheckboxChange(event, row);
      }

      if (isCheckboxChecked !== DynamicDataTable.noop) {
        return;
      }

      if (row === 'all') {
        if (target.checked) {
          var _checkedRows = [];
          rows.filter(function (_ref2) {
            var id = _ref2.id;
            return !disabledCheckboxes.includes(id);
          }).forEach(function (row) {
            return _checkedRows.push(row);
          });
          this.setState({
            checkedRows: _checkedRows
          });
        } else {
          this.setState({
            checkedRows: []
          });
        }

        return;
      }

      var index = -1;
      var checkedRows = this.state.checkedRows;
      var selected = JSON.stringify(row);

      for (var i = 0; i < checkedRows.length; i++) {
        var current = JSON.stringify(checkedRows[i]);

        if (current === selected) {
          index = i;
          break;
        }
      }

      if (target.checked) {
        if (index === -1) {
          checkedRows.push(row);
        }
      } else {
        if (index !== -1) {
          checkedRows.splice(index, 1);
        }
      }

      this.setState({
        checkedRows: checkedRows
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          errorMessage = _this$props5.errorMessage,
          loading = _this$props5.loading,
          rows = _this$props5.rows,
          footer = _this$props5.footer;
      var fields = this.getFields();

      if (errorMessage) {
        return this.renderErrorTable();
      }

      if (loading) {
        return this.renderLoadingTable();
      }

      if (!rows || !rows.length) {
        return this.renderEmptyTable();
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-responsive"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: this.className()
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, this.renderCheckboxCell('all'), fields.map(function (field) {
        return _this2.renderHeader(field);
      }), this.renderActionsCell())), /*#__PURE__*/_react["default"].createElement("tbody", null, rows.map(function (row, index) {
        return _this2.renderRow(row, index);
      })), !!footer && /*#__PURE__*/_react["default"].createElement("tfoot", null, this.renderFooter()))), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'd-flex justify-content-between align-items-center'
      }, this.renderPerPage(), this.renderPagination()));
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props6 = this.props,
          rows = _this$props6.rows,
          actions = _this$props6.actions,
          footer = _this$props6.footer;
      var checkbox = this.renderCheckboxCell('all');
      var width = this.getFields().length;

      if (checkbox) {
        _readOnlyError("width"), width++;
      }

      if (actions.length) {
        _readOnlyError("width"), width++;
      }

      if (typeof footer === 'function') {
        return footer({
          rows: rows,
          width: width
        });
      }

      if ( /*#__PURE__*/_react["default"].isValidElement(footer)) {
        return footer;
      }

      return null;
    }
  }, {
    key: "renderRow",
    value: function renderRow(row, index) {
      var _this3 = this;

      var _this$props7 = this.props,
          onClick = _this$props7.onClick,
          onMouseUp = _this$props7.onMouseUp,
          onMouseDown = _this$props7.onMouseDown,
          buttons = _this$props7.buttons,
          renderCheckboxes = _this$props7.renderCheckboxes,
          disabledCheckboxes = _this$props7.disabledCheckboxes,
          _dataItemManipulator = _this$props7.dataItemManipulator,
          rowRenderer = _this$props7.rowRenderer,
          dangerouslyRenderFields = _this$props7.dangerouslyRenderFields,
          actions = _this$props7.actions,
          editableColumns = _this$props7.editableColumns;
      return rowRenderer({
        row: row,
        onClick: onClick,
        onMouseUp: onMouseUp,
        onMouseDown: onMouseDown,
        buttons: buttons,
        renderCheckboxes: renderCheckboxes,
        disableCheckbox: disabledCheckboxes.includes(row.id),
        key: row.id,
        fields: this.getFields(),
        dataItemManipulator: function dataItemManipulator(field, value, row) {
          return _dataItemManipulator(field, value, row);
        },
        checkboxIsChecked: function checkboxIsChecked(value) {
          return _this3.checkboxIsChecked(value);
        },
        onCheckboxChange: function onCheckboxChange(e) {
          return _this3.checkboxChange(e, row);
        },
        dangerouslyRenderFields: dangerouslyRenderFields,
        actions: actions,
        editableColumns: editableColumns,
        index: index
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(field) {
      var _this4 = this;

      var _this$props8 = this.props,
          orderByField = _this$props8.orderByField,
          orderByDirection = _this$props8.orderByDirection,
          orderByAscIcon = _this$props8.orderByAscIcon,
          orderByDescIcon = _this$props8.orderByDescIcon,
          _this$props8$prependO = _this$props8.prependOrderByIcon,
          prependOrderByIcon = _this$props8$prependO === void 0 ? false : _this$props8$prependO,
          allowOrderingBy = _this$props8.allowOrderingBy,
          disallowOrderingBy = _this$props8.disallowOrderingBy,
          changeOrder = _this$props8.changeOrder,
          columnWidths = _this$props8.columnWidths;
      var _this$props$orderByIc = this.props.orderByIcon,
          orderByIcon = _this$props$orderByIc === void 0 ? '' : _this$props$orderByIc;

      if (orderByField === field.name) {
        if (orderByDirection === 'asc') {
          orderByIcon = orderByAscIcon;
        } else {
          orderByIcon = orderByDescIcon;
        }
      }

      var canOrderBy = (allowOrderingBy.length === 0 || allowOrderingBy.includes(field.name)) && !disallowOrderingBy.includes(field.name);
      var onClickHandler = canOrderBy ? function () {
        return _this4.changeOrder(field);
      } : function () {};
      var cursor = changeOrder && canOrderBy ? 'pointer' : 'default';
      var width = columnWidths[field.name];

      if (typeof width === 'number') {
        width = "".concat(width, "%");
      }

      return /*#__PURE__*/_react["default"].createElement("th", {
        key: field.name,
        width: width,
        onClick: onClickHandler,
        style: {
          cursor: cursor
        }
      }, canOrderBy && prependOrderByIcon ? orderByIcon : '', field.label, "\xA0", canOrderBy && !prependOrderByIcon ? orderByIcon : '');
    }
  }, {
    key: "renderActionsCell",
    value: function renderActionsCell() {
      var _this5 = this;

      var _this$props9 = this.props,
          actions = _this$props9.actions,
          buttons = _this$props9.buttons;
      var state = this.state;

      if (!buttons.length && !actions.length) {
        return null;
      } else if (!actions.length) {
        return /*#__PURE__*/_react["default"].createElement("th", null);
      }

      return /*#__PURE__*/_react["default"].createElement("th", {
        className: "rddt-action-cell"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        disabled: !state.checkedRows.length
      }, "Actions"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton"
      }, this.props.actions.map(function (action) {
        return _this5.renderActionButton(action);
      }))));
    }
  }, {
    key: "renderActionButton",
    value: function renderActionButton(action) {
      var _this6 = this;

      return /*#__PURE__*/_react["default"].createElement("button", {
        key: "action_".concat(action.name),
        type: "button",
        className: "dropdown-item",
        onClick: function onClick() {
          action.callback(_this6.state.checkedRows);

          _this6.setState({
            checkedRows: []
          });
        }
      }, action.name);
    }
  }, {
    key: "renderCheckboxCell",
    value: function renderCheckboxCell(value) {
      var _this7 = this;

      if (!this.props.renderCheckboxes) {
        return;
      }

      var checkbox = /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-check"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        value: value,
        checked: this.checkboxIsChecked(value),
        onChange: function onChange(event) {
          return _this7.checkboxChange(event, value);
        }
      }));

      if (value === 'all') {
        if (!this.props.renderMasterCheckbox) {
          return /*#__PURE__*/_react["default"].createElement("th", null);
        }

        return /*#__PURE__*/_react["default"].createElement("th", null, checkbox);
      }

      return /*#__PURE__*/_react["default"].createElement("td", null, checkbox);
    }
  }, {
    key: "renderLoadingTable",
    value: function renderLoadingTable() {
      var _this$props10 = this.props,
          loadingIndicator = _this$props10.loadingIndicator,
          loadingMessage = _this$props10.loadingMessage,
          loadingComponent = _this$props10.loadingComponent,
          className = _this$props10.className;

      if (loadingComponent) {
        return loadingComponent;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-responsive"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "text-center"
      }, !!loadingIndicator && /*#__PURE__*/_react["default"].createElement("div", null, loadingIndicator), !!loadingMessage && /*#__PURE__*/_react["default"].createElement("div", null, loadingMessage))))));
    }
  }, {
    key: "renderErrorTable",
    value: function renderErrorTable() {
      var _this$props11 = this.props,
          className = _this$props11.className,
          errorMessage = _this$props11.errorMessage;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-responsive"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "text-center"
      }, errorMessage)))));
    }
  }, {
    key: "renderEmptyTable",
    value: function renderEmptyTable() {
      var _this$props12 = this.props,
          noDataMessage = _this$props12.noDataMessage,
          noDataComponent = _this$props12.noDataComponent,
          className = _this$props12.className;

      if ( /*#__PURE__*/_react["default"].isValidElement(noDataComponent)) {
        return noDataComponent;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-responsive"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "text-center"
      }, noDataMessage)))));
    }
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
        currentPage: props.currentPage,
        totalPages: props.totalPages,
        changePage: function changePage(page) {
          return props.changePage(page);
        },
        paginationDelta: props.paginationDelta,
        alwaysShowPagination: props.alwaysShowPagination
      });
    }
  }, {
    key: "renderPerPage",
    value: function renderPerPage() {
      var _this$props13 = this.props,
          changePerPage = _this$props13.changePerPage,
          totalRows = _this$props13.totalRows,
          perPageOptions = _this$props13.perPageOptions,
          perPage = _this$props13.perPage,
          perPageRenderer = _this$props13.perPageRenderer;
      var props = {
        totalRows: totalRows,
        value: perPage,
        onChange: this.changePerPage,
        options: perPageOptions
      };

      if (!changePerPage) {
        return;
      }

      if (typeof perPageRenderer === 'function') {
        return perPageRenderer(props);
      }

      if ( /*#__PURE__*/_react["default"].isValidElement(perPageRenderer)) {
        return /*#__PURE__*/_react["default"].cloneElement(perPageRenderer, props);
      }

      return perPageRenderer;
    }
  }], [{
    key: "noop",
    value: function noop() {
      return null;
    }
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref3) {
      var row = _ref3.row,
          onClick = _ref3.onClick,
          buttons = _ref3.buttons,
          fields = _ref3.fields,
          onMouseUp = _ref3.onMouseUp,
          onMouseDown = _ref3.onMouseDown,
          renderCheckboxes = _ref3.renderCheckboxes,
          disableCheckbox = _ref3.disableCheckbox,
          checkboxIsChecked = _ref3.checkboxIsChecked,
          onCheckboxChange = _ref3.onCheckboxChange,
          _dataItemManipulator2 = _ref3.dataItemManipulator,
          dangerouslyRenderFields = _ref3.dangerouslyRenderFields,
          actions = _ref3.actions,
          editableColumns = _ref3.editableColumns,
          index = _ref3.index;
      return /*#__PURE__*/_react["default"].createElement(_DataRow["default"], {
        key: row.id,
        row: row,
        onClick: onClick,
        onMouseUp: onMouseUp,
        onMouseDown: onMouseDown,
        buttons: buttons,
        fields: fields,
        actions: actions,
        renderCheckboxes: renderCheckboxes,
        disableCheckbox: disableCheckbox,
        editableColumns: editableColumns,
        checkboxIsChecked: checkboxIsChecked,
        checkboxChange: onCheckboxChange,
        dataItemManipulator: function dataItemManipulator(field, value, row) {
          return _dataItemManipulator2(field, value, row);
        },
        dangerouslyRenderFields: dangerouslyRenderFields,
        index: index
      });
    }
  }]);

  return DynamicDataTable;
}(_react.Component);

DynamicDataTable.propTypes = {
  rows: _propTypes["default"].array,
  fieldsToExclude: _propTypes["default"].array,
  fieldMap: _propTypes["default"].object,
  fieldOrder: _propTypes["default"].array,
  currentPage: _propTypes["default"].number,
  totalPages: _propTypes["default"].number,
  orderByField: _propTypes["default"].string,
  orderByDirection: _propTypes["default"].oneOf(['asc', 'desc']),
  orderByIcon: _propTypes["default"].node,
  orderByAscIcon: _propTypes["default"].node,
  orderByDescIcon: _propTypes["default"].node,
  renderCheckboxes: _propTypes["default"].bool,
  disabledCheckboxes: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  editableColumns: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    controlled: _propTypes["default"].bool.isRequired,
    type: _propTypes["default"].string.isRequired,
    onChange: _propTypes["default"].func.isRequired,
    optionsForRow: _propTypes["default"].func
  })),
  actions: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  loadingMessage: _propTypes["default"].string,
  loadingIndicator: _propTypes["default"].element,
  loadingComponent: _propTypes["default"].element,
  errorMessage: _propTypes["default"].string,
  noDataMessage: _propTypes["default"].string,
  noDataComponent: _propTypes["default"].element,
  dataItemManipulator: _propTypes["default"].func,
  buttons: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].func]),
  rowRenderer: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  hoverable: _propTypes["default"].bool,
  allowOrderingBy: _propTypes["default"].array,
  disallowOrderingBy: _propTypes["default"].array,
  dangerouslyRenderFields: _propTypes["default"].array,
  paginationDelta: _propTypes["default"].number,
  columnWidths: _propTypes["default"].object,
  totalRows: _propTypes["default"].number,
  changePerPage: _propTypes["default"].func,
  perPage: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  perPageOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
  perPageRenderer: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  isCheckboxChecked: _propTypes["default"].func,
  onMasterCheckboxChange: _propTypes["default"].func,
  renderMasterCheckbox: _propTypes["default"].bool,
  onCheckboxChange: _propTypes["default"].func,
  footer: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),
  alwaysShowPagination: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
DynamicDataTable.defaultProps = {
  rows: [],
  fieldsToExclude: [],
  fieldMap: {},
  fieldOrder: [],
  currentPage: 1,
  totalPages: 1,
  orderByField: null,
  orderByDirection: 'asc',
  orderByIcon: '',
  orderByAscIcon: '↓',
  orderByDescIcon: '↑',
  renderCheckboxes: false,
  disabledCheckboxes: [],
  editableColumns: [],
  actions: [],
  loading: false,
  loadingMessage: 'Loading data...',
  loadingIndicator: null,
  loadingComponent: null,
  errorMessage: '',
  noDataMessage: 'No data.',
  noDataComponent: null,
  dataItemManipulator: function dataItemManipulator(field, value, row) {
    return value === null ? '' : value;
  },
  buttons: [{
    name: 'View',
    callback: function callback(e, row) {
      window.location = "".concat(window.location.href.split(/[?#]/)[0], "/").concat(row.id);
    }
  }],
  rowRenderer: DynamicDataTable.rowRenderer,
  onClick: DynamicDataTable.noop,
  onMouseUp: DynamicDataTable.noop,
  onMouseDown: DynamicDataTable.noop,
  hoverable: false,
  allowOrderingBy: [],
  disallowOrderingBy: [],
  dangerouslyRenderFields: [],
  paginationDelta: 4,
  columnWidths: {},
  totalRows: 0,
  changePerPage: null,
  perPage: 15,
  perPageRenderer: function perPageRenderer(props) {
    return /*#__PURE__*/_react["default"].createElement(_PerPage["default"], props);
  },
  isCheckboxChecked: DynamicDataTable.noop,
  onMasterCheckboxChange: DynamicDataTable.noop,
  renderMasterCheckbox: true,
  onCheckboxChange: DynamicDataTable.noop,
  footer: null,
  alwaysShowPagination: false,
  className: 'table table-striped'
};
var _default = DynamicDataTable;
exports["default"] = _default;