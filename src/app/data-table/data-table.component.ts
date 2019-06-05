import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	dataSource: DataTableDataSource;

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	displayedColumns = ['id', 'name'];

	ngAfterViewInit() {
		this.dataSource = new DataTableDataSource(this.paginator, this.sort);
	}
}
